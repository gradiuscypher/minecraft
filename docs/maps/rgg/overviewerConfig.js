var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "isOverlay": false,
            "zoomLevels": 8,
            "defaultZoom": 1,
            "north_direction": 0,
            "minZoom": 0,
            "world": "world",
            "last_rendertime": 1595386579,
            "maxZoom": 8,
            "path": "day",
            "name": "Daytime Render",
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "base": "",
            "imgextension": "png",
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595386992",
        "controls": {
            "spawn": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "overlays": true
        }
    }
};
