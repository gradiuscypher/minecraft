var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "zoomLevels": 8,
            "name": "Daytime Render",
            "isOverlay": false,
            "world": "world",
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "defaultZoom": 1,
            "base": "",
            "imgextension": "png",
            "poititle": "Markers",
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "maxZoom": 8,
            "last_rendertime": 1595498179
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "mapType": true
        },
        "cacheTag": "1595498560"
    },
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    }
};
