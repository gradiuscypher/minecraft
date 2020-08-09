var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1596981379,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "imgextension": "png",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "name": "Daytime Render",
            "world": "world",
            "maxZoom": 8,
            "north_direction": 0,
            "path": "day",
            "isOverlay": false
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1596981762",
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true
        }
    }
};
