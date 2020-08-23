var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "name": "Daytime Render",
            "base": "",
            "imgextension": "png",
            "poititle": "Markers",
            "isOverlay": false,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "zoomLevels": 10,
            "minZoom": 0,
            "last_rendertime": 1598219880,
            "maxZoom": 10,
            "world": "Core01",
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1598220086",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true
        }
    }
};
