var overviewerConfig = {
    "tilesets": [
        {
            "path": "day",
            "maxZoom": 8,
            "imgextension": "png",
            "defaultZoom": 1,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "north_direction": 0,
            "minZoom": 0,
            "isOverlay": false,
            "zoomLevels": 8,
            "last_rendertime": 1596657379,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "showlocationmarker": true
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596657764",
        "debug": true,
        "controls": {
            "overlays": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true
        }
    },
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    }
};
