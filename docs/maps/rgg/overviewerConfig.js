var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "zoomLevels": 8,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "maxZoom": 8,
            "imgextension": "png",
            "defaultZoom": 1,
            "poititle": "Markers",
            "name": "Daytime Render",
            "north_direction": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "showlocationmarker": true,
            "last_rendertime": 1597283779,
            "minZoom": 0
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597284164",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "compass": true,
            "mapType": true
        }
    }
};
