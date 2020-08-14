var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "isOverlay": false,
            "zoomLevels": 8,
            "path": "day",
            "base": "",
            "world": "world",
            "last_rendertime": 1597388179,
            "name": "Daytime Render",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "showlocationmarker": true,
            "minZoom": 0,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png"
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597388563"
    }
};
