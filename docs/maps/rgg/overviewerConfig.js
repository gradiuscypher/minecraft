var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "tilesets": [
        {
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "base": "",
            "world": "world",
            "maxZoom": 8,
            "showlocationmarker": true,
            "north_direction": 0,
            "path": "day",
            "zoomLevels": 8,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "last_rendertime": 1595231779,
            "isOverlay": false,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595232160",
        "controls": {
            "pan": true,
            "overlays": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true
        },
        "north_direction": "lower-left"
    }
};
