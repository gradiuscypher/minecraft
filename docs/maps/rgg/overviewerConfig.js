var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "imgextension": "png",
            "path": "day",
            "maxZoom": 8,
            "zoomLevels": 8,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1599047779,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "poititle": "Markers",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "compass": true
        },
        "cacheTag": "1599048169",
        "north_direction": "lower-left"
    }
};
