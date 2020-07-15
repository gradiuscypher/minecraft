var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "defaultZoom": 1,
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "base": "",
            "maxZoom": 8,
            "imgextension": "png",
            "showlocationmarker": true,
            "zoomLevels": 8,
            "name": "Daytime Render",
            "north_direction": 0,
            "minZoom": 0,
            "last_rendertime": 1594853779
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1594854162",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true
        }
    }
};
