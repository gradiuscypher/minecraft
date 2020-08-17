var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "tilesets": [
        {
            "last_rendertime": 1597690680,
            "maxZoom": 10,
            "minZoom": 0,
            "poititle": "Markers",
            "isOverlay": false,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "zoomLevels": 10,
            "world": "Core01",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597690884",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        }
    }
};
